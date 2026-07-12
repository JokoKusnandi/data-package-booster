
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import packagesData from '@/data/packages';

const PurchasePage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const purchaseType = searchParams.get('type') === 'one-time' ? 'one-time' : 'subscription';
  
  const [packageData, setPackageData] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [isLoading, setIsLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  useEffect(() => {
    const selectedPackage = packagesData.find(pkg => pkg.id === id);
    if (selectedPackage) {
      setPackageData(selectedPackage);
    }
  }, [id]);
  
  const price = purchaseType === 'one-time' 
    ? packageData?.oneTimePurchase 
    : packageData?.subscription;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber) {
      toast.error('Please enter your phone number');
      return;
    }
    
    if (!agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Purchase successful! Your package will be activated shortly.');
      setIsLoading(false);
    }, 1500);
  };
  
  if (!packageData) {
    return (
      <Layout>
        <div className="page-container">
          <div className="text-center py-20">
            <h1 className="text-2xl font-medium mb-4">Package not found</h1>
            <Button asChild>
              <Link to="/packages">Back to Packages</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="page-container max-w-5xl">
        <div className="mb-8">
          <Link 
            to="/packages" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Packages
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Purchase Form */}
          <div>
            <h1 className="text-3xl font-bold mb-6">Complete Your Purchase</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="phoneNumber">XL Phone Number</Label>
                <Input 
                  id="phoneNumber" 
                  type="text" 
                  placeholder="e.g., 0817XXXXXXX" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border-xl-blue/20 focus:border-xl-blue"
                />
              </div>
              
              <div className="space-y-4">
                <Label>Payment Method</Label>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="border rounded-lg p-4 cursor-pointer transition-all hover:bg-muted/20" data-state={paymentMethod === 'creditCard' ? 'checked' : 'unchecked'}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="creditCard" id="creditCard" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="creditCard" className="font-medium">Credit Card</Label>
                        <p className="text-sm text-muted-foreground">Pay with Visa, Mastercard, or American Express</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 cursor-pointer transition-all hover:bg-muted/20" data-state={paymentMethod === 'bankTransfer' ? 'checked' : 'unchecked'}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="bankTransfer" id="bankTransfer" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="bankTransfer" className="font-medium">Bank Transfer</Label>
                        <p className="text-sm text-muted-foreground">Transfer from any Indonesian bank account</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 cursor-pointer transition-all hover:bg-muted/20" data-state={paymentMethod === 'eWallet' ? 'checked' : 'unchecked'}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="eWallet" id="eWallet" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="eWallet" className="font-medium">E-Wallet</Label>
                        <p className="text-sm text-muted-foreground">Pay with GoPay, OVO, or DANA</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 cursor-pointer transition-all hover:bg-muted/20" data-state={paymentMethod === 'retailStore' ? 'checked' : 'unchecked'}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="retailStore" id="retailStore" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="retailStore" className="font-medium">Retail Store</Label>
                        <p className="text-sm text-muted-foreground">Pay at Alfamart, Indomaret, or XL Center</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="terms" 
                  checked={agreeToTerms}
                  onCheckedChange={setAgreeToTerms}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the <Link to="/terms" className="text-xl-blue hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-xl-blue hover:underline">Privacy Policy</Link>
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-xl-blue hover:bg-xl-dark"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Complete Purchase'}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card className="border-xl-blue/20 shadow-sm">
              <CardHeader className="bg-xl-blue/5 border-b border-xl-blue/10">
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg">{packageData.title}</h3>
                      <p className="text-sm text-muted-foreground">{packageData.size} - {purchaseType === 'one-time' ? 'One-time Purchase' : 'Monthly Subscription'}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl">Rp {price?.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Package Details:</h4>
                    <ul className="space-y-2">
                      {packageData.features.map((feature: string, index: number) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-xl-blue/10 flex items-center justify-center text-xl-blue flex-shrink-0 mt-0.5">
                            <Check size={12} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Package Price</span>
                      <span className="font-medium">Rp {price?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Tax (11%)</span>
                      <span className="font-medium">Rp {Math.round(price * 0.11).toLocaleString()}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-xl">Rp {Math.round(price * 1.11).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-secondary border-t text-sm text-muted-foreground">
                <p>Your package will be activated within 5 minutes after successful payment.</p>
              </CardFooter>
            </Card>
            
            <div className="mt-8">
              <div className="bg-xl-blue/5 border border-xl-blue/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-sm">Need help with your purchase?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our customer support team is available 24/7 to assist you with any questions.
                </p>
                <Button variant="outline" className="text-sm w-full border-xl-blue/20 text-xl-blue hover:bg-xl-blue/5">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PurchasePage;

import React from 'react';
import { Film, Music, Share2, Layout, Briefcase, Calendar, Clock, Phone } from 'lucide-react';
import { PackageData } from '@/components/PackageCard';

const packagesData: PackageData[] = [
  {
    id: 'film-15gb',
    title: 'Film Package',
    type: 'Film',
    size: '15GB',
    oneTimePurchase: 30000,
    subscription: 25000,
    description: 'Perfect for movie lovers and binge-watchers who want uninterrupted streaming experiences.',
    features: [
      'Access to all streaming platforms',
      'HD video streaming capability',
      'Watch up to 30 hours of content',
      'Valid for 30 days'
    ],
    icon: <Film size={24} />,
    color: 'red'
  },
  {
    id: 'music-15gb',
    title: 'Music Package',
    type: 'Music',
    size: '15GB',
    oneTimePurchase: 25000,
    subscription: 20000,
    description: 'Designed for music enthusiasts who want to stream their favorite tracks anywhere, anytime.',
    features: [
      'High-quality audio streaming',
      'Download for offline listening',
      'Listen to up to 300 hours of music',
      'Valid for 30 days'
    ],
    icon: <Music size={24} />,
    color: 'green'
  },
  {
    id: 'socmed-15gb',
    title: 'Social Media Package',
    type: 'Socmed',
    size: '15GB',
    oneTimePurchase: 25000,
    subscription: 20000,
    description: 'Stay connected with friends and family through all your favorite social networking apps.',
    features: [
      'Coverage for all social platforms',
      'High-speed photo and video sharing',
      'Video calls without interruptions',
      'Valid for 30 days'
    ],
    icon: <Share2 size={24} />,
    color: 'blue'
  },
  {
    id: 'complete-30gb',
    title: 'Complete Package',
    type: 'Complete',
    size: '30GB',
    oneTimePurchase: 50000,
    subscription: 40000,
    description: 'The ultimate data package for digital enthusiasts who want it all without limitations.',
    features: [
      'All-in-one solution for all platforms',
      'Premium speed and performance',
      'Double the data for all your needs',
      'Valid for 30 days'
    ],
    icon: <Layout size={24} />,
    color: 'purple'
  },
  // PRIO Bekerja & Belajar packages
  {
    id: 'prio-5gb',
    title: 'PRIO Work & Study',
    type: 'PRIO',
    size: '5GB',
    oneTimePurchase: 7000,
    subscription: 6000,
    description: 'Optimized for work and study activities with prioritized bandwidth for productivity applications.',
    features: [
      'Optimized for video conferencing',
      'Priority access for productivity apps',
      'Stable connection for online learning',
      'Valid for 30 days'
    ],
    icon: <Briefcase size={24} />,
    color: 'amber'
  },
  {
    id: 'prio-10gb',
    title: 'PRIO Work & Study',
    type: 'PRIO',
    size: '10GB',
    oneTimePurchase: 15000,
    subscription: 13000,
    description: 'Enhanced data package for productive work and learning sessions with double the data.',
    features: [
      'Double the data for longer sessions',
      'Priority bandwidth for work applications',
      'Enhanced stability for video calls',
      'Valid for 30 days'
    ],
    icon: <Briefcase size={24} />,
    color: 'amber'
  },
  {
    id: 'prio-20gb',
    title: 'PRIO Work & Study',
    type: 'PRIO',
    size: '20GB',
    oneTimePurchase: 25000,
    subscription: 22000,
    description: 'Premium work and study package with ample data for all your professional and educational needs.',
    features: [
      'High capacity for intensive work days',
      'Perfect for file sharing and downloads',
      'Premium connection quality guaranteed',
      'Valid for 30 days'
    ],
    icon: <Briefcase size={24} />,
    color: 'amber'
  },
  {
    id: 'prio-50gb',
    title: 'PRIO Work & Study',
    type: 'PRIO',
    size: '50GB',
    oneTimePurchase: 50000,
    subscription: 45000,
    description: 'Maximum capacity data plan for professionals and students with heavy online requirements.',
    features: [
      'Our largest work & study data allocation',
      'Ideal for remote workers and online students',
      'Supports large file transfers and downloads',
      'Valid for 30 days'
    ],
    icon: <Briefcase size={24} />,
    color: 'amber'
  },
  
  // New Monthly Packages
  {
    id: 'monthly-30gb',
    title: 'PAKET BOOSTER Monthly',
    type: 'Monthly',
    size: '30GB',
    oneTimePurchase: 75000,
    subscription: 60000,
    description: 'Standard monthly data package for all your digital needs with great value.',
    features: [
      'High-speed connectivity for all applications',
      'Perfect for moderate daily usage',
      'Ideal for streaming and browsing',
      'Valid for 30 days'
    ],
    icon: <Calendar size={24} />,
    color: 'indigo'
  },
  {
    id: 'monthly-35gb',
    title: 'PAKET BOOSTER Monthly',
    type: 'Monthly',
    size: '35GB',
    oneTimePurchase: 100000,
    subscription: 75000,
    description: 'Enhanced monthly data package for users who need more data with better savings.',
    features: [
      'More data for extensive usage needs',
      'Great value for heavy internet users',
      'Seamless experience across all devices',
      'Valid for 30 days'
    ],
    icon: <Calendar size={24} />,
    color: 'indigo'
  },
  {
    id: 'monthly-75gb',
    title: 'PAKET BOOSTER Monthly',
    type: 'Monthly',
    size: '75GB',
    oneTimePurchase: 200000,
    subscription: 180000,
    description: 'Premium monthly data package for users with high data consumption needs.',
    features: [
      'Our largest monthly data allocation',
      'Perfect for families or heavy users',
      'Maximum speed and performance',
      'Valid for 30 days'
    ],
    icon: <Calendar size={24} />,
    color: 'indigo'
  },
  
  // Daily Packages
  {
    id: 'daily-2gb-3days',
    title: 'PAKET BOOSTER Daily',
    type: 'Daily',
    size: '2GB',
    oneTimePurchase: 7000,
    subscription: null,
    description: 'Short-term data package for 3 days of connectivity.',
    features: [
      'Quick data solution for short-term needs',
      'High-speed browsing and streaming',
      'No subscription required',
      'Valid for 3 days'
    ],
    icon: <Clock size={24} />,
    color: 'orange',
    validity: '3 days'
  },
  {
    id: 'daily-2gb-5days',
    title: 'PAKET BOOSTER Daily',
    type: 'Daily',
    size: '2GB',
    oneTimePurchase: 10000,
    subscription: null,
    description: 'Extended short-term data package for 5 days of connectivity.',
    features: [
      'Perfect for short trips or temporary needs',
      'High-speed browsing and streaming',
      'No subscription required',
      'Valid for 5 days'
    ],
    icon: <Clock size={24} />,
    color: 'orange',
    validity: '5 days'
  },
  
  // New OffNet Booster packages - OTC mechanism
  {
    id: 'offnet-50-otc',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '50 Mnt & 50 SMS',
    oneTimePurchase: 33300,
    subscription: null,
    description: 'Make calls and send SMS to other networks with our affordable OffNet package.',
    features: [
      '50 minutes for calls to other networks',
      '50 SMS to other networks',
      'One-time purchase (OTC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'OTC'
  },
  {
    id: 'offnet-100-otc',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '100 Mnt & 100 SMS',
    oneTimePurchase: 55500,
    subscription: null,
    description: 'Enhanced calling package for users who frequently call other networks.',
    features: [
      '100 minutes for calls to other networks',
      '100 SMS to other networks',
      'One-time purchase (OTC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'OTC'
  },
  {
    id: 'offnet-200-otc',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '200 Mnt & 200 SMS',
    oneTimePurchase: 83250,
    subscription: null,
    description: 'Medium-sized calling package for frequent communication with other networks.',
    features: [
      '200 minutes for calls to other networks',
      '200 SMS to other networks',
      'One-time purchase (OTC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'OTC'
  },
  {
    id: 'offnet-300-otc',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '300 Mnt & 300 SMS',
    oneTimePurchase: 111000,
    subscription: null,
    description: 'Large calling package for heavy users who frequently call other networks.',
    features: [
      '300 minutes for calls to other networks',
      '300 SMS to other networks',
      'One-time purchase (OTC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'OTC'
  },
  {
    id: 'offnet-600-otc',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '600 Mnt & 600 SMS',
    oneTimePurchase: 138750,
    subscription: null,
    description: 'Premium calling package for heavy business users with extensive off-network communication.',
    features: [
      '600 minutes for calls to other networks',
      '600 SMS to other networks',
      'One-time purchase (OTC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'OTC'
  },
  
  // New OffNet Booster packages - REC mechanism
  {
    id: 'offnet-50-rec',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '50 Mnt & 50 SMS',
    oneTimePurchase: 27750,
    subscription: null,
    description: 'Make calls and send SMS to other networks with our affordable recurring OffNet package.',
    features: [
      '50 minutes for calls to other networks',
      '50 SMS to other networks',
      'Recurring subscription (REC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'REC'
  },
  {
    id: 'offnet-100-rec',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '100 Mnt & 100 SMS',
    oneTimePurchase: 49950,
    subscription: null,
    description: 'Enhanced calling package for users who frequently call other networks with recurring billing.',
    features: [
      '100 minutes for calls to other networks',
      '100 SMS to other networks',
      'Recurring subscription (REC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'REC'
  },
  {
    id: 'offnet-200-rec',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '200 Mnt & 200 SMS',
    oneTimePurchase: 72150,
    subscription: null,
    description: 'Medium-sized calling package with recurring billing for regular off-network communication.',
    features: [
      '200 minutes for calls to other networks',
      '200 SMS to other networks',
      'Recurring subscription (REC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'REC'
  },
  {
    id: 'offnet-300-rec',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '300 Mnt & 300 SMS',
    oneTimePurchase: 88800,
    subscription: null,
    description: 'Large calling package with recurring billing for frequent off-network communication.',
    features: [
      '300 minutes for calls to other networks',
      '300 SMS to other networks',
      'Recurring subscription (REC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'REC'
  },
  {
    id: 'offnet-600-rec',
    title: 'OffNet Booster',
    type: 'OffNet',
    size: '600 Mnt & 600 SMS',
    oneTimePurchase: 116550,
    subscription: null,
    description: 'Premium calling package with recurring billing for extensive off-network communication needs.',
    features: [
      '600 minutes for calls to other networks',
      '600 SMS to other networks',
      'Recurring subscription (REC)',
      'Valid for 30 days'
    ],
    icon: <Phone size={24} />,
    color: 'cyan',
    mechanism: 'REC'
  }
];

export default packagesData;

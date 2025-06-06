import { GroupCardType } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const analytics = [
  {
    title: 'Groups associated with',
    content: '12',
    description: 'No recent update since last week',
  },
  {
    title: 'Contribution count',
    content: '20,000',
    description: 'About 2% increase from last week',
  },
  {
    title: 'Pending contributions',
    content: '5',
    description: 'About 2% decrease from last week',
  },
];

export const groupCardData: GroupCardType[] = [
  {
    image:
      'https://img.freepik.com/free-photo/full-shot-man-working-from-home_23-2149160992.jpg?t=st=1744106840~exp=1744110440~hmac=12e60f39147b2f9e328d8f0068c8edf88dbf31217636edb66b31fcd1ac6b521a&w=996',
    title: 'Household Essentials',
    description:
      'Group expenses for our shared apartment — everything from bills to food and fun outings.',
    members: 6,
    total: 4830,
    content: [
      {
        id: uuidv4(),
        title: 'Lunch Split',
        price: 50,
        status: 'ongoing',
        members: 3,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Movie Night',
        price: 120,
        status: 'ended',
        members: 4,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Electricity Bill',
        price: 75,
        status: 'ongoing',
        members: 2,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Monthly Groceries',
        price: 300,
        status: 'ended',
        members: 5,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Birthday Gift',
        price: 200,
        status: 'ongoing',
        members: 6,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Road Trip Fuel',
        price: 180,
        status: 'ended',
        members: 4,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Streaming Subscription',
        price: 90,
        status: 'ongoing',
        members: 3,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Beach House Rent',
        price: 1000,
        status: 'ended',
        members: 5,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Weekly Snacks',
        price: 45,
        status: 'ongoing',
        members: 3,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Internet Bill',
        price: 150,
        status: 'ended',
        members: 2,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Laundry Supplies',
        price: 35,
        status: 'ongoing',
        members: 4,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Study Group Pizza',
        price: 60,
        status: 'ended',
        members: 5,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Pet Food',
        price: 70,
        status: 'ongoing',
        members: 2,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Furniture Delivery',
        price: 400,
        status: 'ended',
        members: 6,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Cleaning Service',
        price: 250,
        status: 'ongoing',
        members: 3,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Coffee Subscription',
        price: 85,
        status: 'ended',
        members: 3,
        action: 'contributed',
      },
    ],
  },
  {
    image:
      'https://img.freepik.com/free-photo/people-having-party-by-beach_53876-26402.jpg?t=st=1744106897~exp=1744110497~hmac=e44c6b830922fd18b87cc25691f1864752d5f17d4de6e3218e2ca755a5eb7f7b&w=1060',
    title: 'Beach Party',
    description: 'For a beach party',
    members: 20,
    total: 5000,
    content: [
      {
        id: uuidv4(),
        title: 'Conference Tickets',
        price: 500,
        status: 'ongoing',
        members: 2,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Weekend Airbnb',
        price: 750,
        status: 'ended',
        members: 5,
        action: 'contributed',
      },
      {
        id: uuidv4(),
        title: 'Group Art Supplies',
        price: 95,
        status: 'ongoing',
        members: 4,
        action: 'pending contribution',
      },
      {
        id: uuidv4(),
        title: 'Karaoke Night',
        price: 110,
        status: 'ended',
        members: 3,
        action: 'contributed',
      },
    ]
  }
];

export const groupActions = [
  {
    id: 1,
    label: "Manage Members",
    icon: "grommet-icons:user-settings"
  },
  {
    id: 2,
    label: "Copy Group Code",
    icon: "lucide-lab:copy-code"
  },
  {
    id: 3,
    label: "Copy Group Link",
    icon: "hugeicons:copy-link"
  },
  {
    id: 4,
    label: "Delete Group",
    icon: "hugeicons:delete-04"
  },
]

export const participants = [
  {
    id: "p1",
    name: "Alex Johnson",
    email: "alex.j@example.com",
  },
  {
    id: "p2",
    name: "Morgan Smith",
    email: "morgan.s@example.com",
  },
  {
    id: "p3",
    name: "Taylor Williams",
    email: "taylor.w@example.com",
  },
  {
    id: "p4",
    name: "Jordan Lee",
    email: "jordan.l@example.com",
  },
];

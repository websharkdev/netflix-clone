import { Metadata } from 'next';

export const siteConfig = {
    name: 'Nefflix',
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/'
            : 'https://nefflix-clone.vercel.app/',
    ogImage: '',
    description: 'This project is a full-stack Nefflix clone built using React, Tailwind CSS, Next.js, Drizzle, NeonDB, Better-Auth, and deployed on Vercel. It aims to replicate the main features and functionality of the Nefflix platform.',
    links: {},
};

const metadataKeyWords = [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'NeonDB',
    'Better-Auth',
    'Drizzle',
];

export const defaultMetadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: metadataKeyWords,
    authors: [
        {
            name: 'webshark.dev',
            url: 'https://github.com/websharkdev',
        },
    ],
    creator: 'webshark.dev',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}manifest.webmanifest`,
};

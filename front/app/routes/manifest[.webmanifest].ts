import type {WebAppManifest} from '@remix-pwa/dev';
import {json} from '@remix-run/node';

export const loader = () => {
    return json(
        {
            scope: "/",
            theme_color: "#121212",
            icons: [
                {
                    src: "/solar-192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "/solar-512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
            short_name: 'MC',
            name: 'Magasin connecté',
            start_url: '/',
            display: 'standalone',
            background_color: '#3679de',

        } as WebAppManifest,
        {
            headers: {
                'Cache-Control': 'public, max-age=600',
                'Content-Type': 'application/manifest+json',
            },
        }
    );
};

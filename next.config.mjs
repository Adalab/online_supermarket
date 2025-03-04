const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    images: {
        domains: [
            "fontvella.danone.es",
            "static.carrefour.es",
            "lh6.googleusercontent.com",
            "m.media-amazon.com",
            "delahuertacasa.com",
            "s1.elespanol.com",
            "assets.tmecosys.com",
            "www.farmaciabarata.es",
            "dehesia.com",
            "www.druni.es",
            "example.com",
            "tienda.laespanolaaceites.com",
            "www.cafesoquendo.com",
            "rosara.com",
            "www.arrozsos.es",
            "sgfm.elcorteingles.es",
            "fruteriadevalencia.com",
            "www.lacajadelahuerta.com",
            "kitchenacademy.es",
            "fruteriaonlinemadrid.es",
            "laplazadejaen.com",
            "www.lechepuleva.es",
            "verdecora.es",
            "www.campusdelvino.com",
            "www.gastronomiavasca.net",
            "encrypted-tbn0.gstatic.com",
            "www.allnaturalbilbao.com"
        ],
    },
    ...isProd && { assetPrefix: '/online_supermarket' },
    ...isProd && { basePath: '/online_supermarket' },
    ...isProd && { output: 'export' },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

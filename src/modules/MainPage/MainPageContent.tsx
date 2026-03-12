import { useState, useEffect, useMemo } from 'react';
import { Box } from '@mui/material';

// Generamos las posiciones de los sparkles una sola vez (fuera del render)
const SPARKLES = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    delay: `${Math.random() * 2}s`,
}));

const MainPageContent = () => {
    const [animationPhase, setAnimationPhase] = useState<'growing' | 'spinning'>('growing');

    useEffect(() => {
        const timer = setTimeout(() => setAnimationPhase('spinning'), 1000);
        return () => clearTimeout(timer);
    }, []);

    const sparkles = useMemo(() => SPARKLES, []);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                flex: 1,
                minHeight: 0,
                overflow: 'hidden',
            }}
        >
            {/* Sparkles */}
            {animationPhase === 'spinning' && (
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        '& .sparkle': {
                            position: 'absolute',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, #fff, #ffcc00, transparent)',
                            animation: 'sparkleAnim 1.5s infinite ease-in-out',
                        },
                        '@keyframes sparkleAnim': {
                            '0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
                            '50%': { transform: 'scale(1.5) rotate(45deg)', opacity: 1 },
                        },
                    }}
                >
                    {sparkles.map(({ id, top, left, delay }) => (
                        <Box
                            key={id}
                            className="sparkle"
                            sx={{
                                top,
                                left,
                                animationDelay: delay,
                                boxShadow: '0 0 10px 2px rgba(255, 204, 0, 0.5)',
                            }}
                        />
                    ))}
                </Box>
            )}

            {/* Logo animado */}
            <Box
                component="img"
                src="https://stickerapp.es/cdn-assets/images/stickers/663t.png"
                alt="Logo"
                sx={{
                    width: { xs: '55vmin', sm: '40vmin', md: '30vmin' },
                    height: 'auto',
                    objectFit: 'contain',
                    transformOrigin: 'center center',
                    zIndex: 1,
                    animation:
                        animationPhase === 'growing'
                            ? 'growScale 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
                            : 'spin3D 3s linear infinite',
                    '@keyframes growScale': {
                        from: { transform: 'scale(0)', opacity: 0 },
                        to: { transform: 'scale(1)', opacity: 1 },
                    },
                    '@keyframes spin3D': {
                        from: { transform: 'rotateY(0deg)' },
                        to: { transform: 'rotateY(360deg)' },
                    },
                }}
            />
        </Box>
    );
};

export default MainPageContent;

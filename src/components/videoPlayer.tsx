import { useEffect, useRef } from 'react';

export default function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            // Garante que o vídeo comece
            const playVideo = async () => {
                try {
                    await video.play();
                } catch (err) {
                    console.error("Erro ao tentar reproduzir o vídeo automaticamente:", err);
                }
            };

            playVideo();

            // Reforça que o vídeo não deve pausar
            const handlePause = () => {
                if (!video.ended) {
                    video.play();
                }
            };

            video.addEventListener('pause', handlePause);

            // Impede barra de espaço
            const preventPauseKeys = (e: KeyboardEvent) => {
                if (e.code === 'Space') {
                    e.preventDefault();
                }
            };

            document.addEventListener('keydown', preventPauseKeys);

            return () => {
                video.removeEventListener('pause', handlePause);
                document.removeEventListener('keydown', preventPauseKeys);
            };
        }
    }, []);

    return (
        <div className="w-full max-w-xl mx-auto aspect-[9/16] rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
            <video
                ref={videoRef}
                src="/assets/TESTE QUIZ.mp4"
                className="w-full h-full custom-video"
                autoPlay
                loop
                controls
                playsInline
                muted
            />
            <style>{`
                /* Oculta botão central (pausar/tocar) e inicial */
                ::cue { display: none; } /* legenda */
                video::-webkit-media-controls-play-button,
                video::-webkit-media-controls-start-playback-button {
                    display: none !important;
                    pointer-events: none;
                }

                /* Oculta botão grande do centro no iOS/Safari */
                video::-webkit-media-controls-overlay-play-button {
                    display: none !important;
                }

                /* Oculta o botão de play/pause lateral */
                video::-webkit-media-controls-panel > button:first-child {
                    display: none !important;
                }

                
            `}</style>
        </div>
    );
}

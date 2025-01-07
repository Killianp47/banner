import { useState } from 'react';
import M8Logo from './components/m8-logo';
import PlaygroundCard from './components/playground-card';
import PreviewCard from './components/preview-card.png';
import GithubIcon from './assets/icons/github-icon';
import toast, { Toaster } from 'react-hot-toast';

const m8_1Banner = new URL('assets/images/artists/m8/DVM.png', import.meta.url)
  .href;


const App = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [] = useState<{
    artist: string;
    bannerNumber: number;
  }>({
    artist: 'dvm',
    bannerNumber: 1,
  });
  const [positionX, setPositionX] = useState(100); // Initial value for X position
  const [positionY, setPositionY] = useState(50); // Initial value for Y position
  const drawSizedImage = () => {
    const sourceCanvas = document.querySelector('canvas');
    if (!sourceCanvas) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 1500;
    tempCanvas.height = 500;
    const tempCtx = tempCanvas.getContext('2d');

    if (!tempCtx) return;

    tempCtx.drawImage(sourceCanvas, 0, 0, 1500, 500);
    return tempCanvas;
  };

  const handleDownload = () => {
    const tempCanvas = drawSizedImage();
    if (!tempCanvas) return;

    const link = document.createElement('a');
    link.download = `dvm-${username || 'banner'}.png`;
    link.href = tempCanvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = async () => {
    const tempCanvas = drawSizedImage();
    if (!tempCanvas) return;

    try {
      // Copy method for Apple devices
      if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        const img = document.createElement('img');
        img.src = tempCanvas.toDataURL('image/png');

        const div = document.createElement('div');
        div.contentEditable = 'true';
        div.appendChild(img);
        document.body.appendChild(div);

        const range = document.createRange();
        range.selectNodeContents(div);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        document.execCommand('copy');

        document.body.removeChild(div);
      } else {
        // New copy method
        const tmpCanvas = tempCanvas.toDataURL('image/png');
        const data = await fetch(tmpCanvas);
        const blob = await data.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
      }

      toast.success('Bannière copiée dans le presse-papiers', {
        position: 'bottom-center',
      });
    } catch {
      toast.error('Erreur lors de la copie', {
        position: 'bottom-center',
      });
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col ">
        <header className="flex justify-center flex-col w-full mt-14">
          <h1 className="text-foreground-primary text-center text-4xl font-bold leading-10 font-cal">
            Créer une bannière{' '}
            <span className="whitespace-nowrap">
              <M8Logo />
            </span>
            <br />
            <span className="text-foreground-accent">en quelques clics</span>
          </h1>
          <a
            href="https://www.dvmcorp.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-foreground-accent text-xs text-center mt-5 py-1.5 px-3 bg-background-accent rounded-full w-fit mx-auto">
              Powered by
              <span className="font-semibold ml-2">
               Kpr
              </span>
            </p>
          </a>
        </header>

        <main className="flex flex-col xl:flex-row gap-6 xl:gap-4 m-auto px-6 md:px-10 py-14 xl:py-20 2xl:py-10 w-screen xl:max-w-[1840px] xl:h-[900px]">
          <PreviewCard
            username={username}
            role={role}
            selectedBanner={m8_1Banner}
            onDownload={handleDownload}
            onCopy={handleCopy} positionX={positionX} positionY={positionY}          />
          <PlaygroundCard
            username={username}
            role={role}
            onUsernameChange={(newUsername) =>
              setUsername(newUsername.toUpperCase())
            }
            onRoleChange={(newRole) => setRole(newRole.toUpperCase())}
            positionX={positionX}
            positionY={positionY}
            onPositionXChange={(newX) => setPositionX(newX)}
            onPositionYChange={(newY) => setPositionY(newY)}
          />
        </main>

        <footer className="p-4 text-center text-black font-figtree text-sm">
          <a
            href="https://github.com/zachdlz/m8-banner-editor"
            className="flex justify-center mb-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <p>
            Outil 100% gratuit. Développé par{' '}
            <a
              href="https://x.com/ZzAK_K"
              className="font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ZzAK_K
            </a>
            , designé par{' '}
            <a
              href="https://x.com/reaiucas"
              className="font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              @reaiucas
            </a>
            , amélioré par {''}
            <a
              href="https://x.com/kpr__6"
              className="font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >@Kpr__6</a>
          </p>
        </footer>
      </div>
      <Toaster />
    </>
  );
};

export default App;

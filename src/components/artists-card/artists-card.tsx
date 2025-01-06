

type ArtistsCardProps = {
  onBannerChange: (banner: { artist: string; bannerNumber: number }) => void;
  selectedBanner: { artist: string; bannerNumber: number };
};

const ArtistsCard = (props: ArtistsCardProps) => {
  return (
    <div className="order-3 xl:order-none min-w-[12%] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-cal">
        Artistes
      </h2>
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground-primary text-md">~ DVM</h3>
        <div className="flex items-center gap-2">
          <div
            className={`rounded-lg p-[1px] ${
              props.selectedBanner?.artist === 'm8' &&
              props.selectedBanner?.bannerNumber === 1
                ? 'border-2 border-foreground-accent'
                : ''
            }`}
          >
          </div>
          <div
            className={`rounded-lg p-[1px] ${
              props.selectedBanner?.artist === 'm8' &&
              props.selectedBanner?.bannerNumber === 2
                ? 'border-2 border-foreground-accent'
                : ''
            }`}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsCard;

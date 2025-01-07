import { EraseIcon } from '../../assets/icons';
import Button from '../buttons';

type PlaygroundCardProps = {
  username: string;
  role: string;
  onUsernameChange: (username: string) => void;
  onRoleChange: (role: string) => void;
  positionX: number;
  positionY: number;
  onPositionXChange: (positionX: number) => void;
  onPositionYChange: (positionY: number) => void;
};

const PlaygroundCard = (props: PlaygroundCardProps) => {
  return (
    <div className="order-2 xl:order-none min-w-[20%] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-figtree">
        Personnalisation
      </h2>
      <div className="flex flex-col gap-4">
  {/* Progress bars for X and Y position */}
  <div className="flex flex-col gap-2">
    <div>
      <label
        htmlFor="positionX"
        className="text-foreground-primary text-sm block mb-1"
      >
        Horizontal
      </label>
      <input
        type="range"
        id="positionX"
        min="0"
        max="1000"
        value={props.positionX}
        onChange={(e) => props.onPositionXChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground-accent"
      />
    </div>
    <div>
      <label
        htmlFor="positionY"
        className="text-foreground-primary text-sm block mb-1"
      >
        Vertical
      </label>
      <input
        type="range"
        id="positionY"
        min="0"
        max="300"
        value={props.positionY}
        onChange={(e) => props.onPositionYChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground-accent"
      />
    </div>
  </div>

  {/* Inputs for username and role */}
  <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-1">
      <label htmlFor="pseudo" className="text-foreground-primary text-sm">
        Ton pseudo
      </label>
      <input
        type="text"
        id="pseudo"
        className="w-full h-9 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground-accent"
        placeholder="MEDJA"
        value={props.username}
        onChange={(e) => props.onUsernameChange(e.target.value)}
      />
    </div>
    <div className="flex flex-col gap-0.5">
      <label htmlFor="role" className="text-foreground-primary text-sm">
        Ton rôle
      </label>
      <input
        type="text"
        id="role"
        className="w-full h-9 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground-accent"
        placeholder="ULTRA"
        value={props.role}
        onChange={(e) => props.onRoleChange(e.target.value)}
      />
    </div>
  </div>
</div>
      <div className="flex justify-end mt-4 lg:mt-auto">
        <Button
          variant="primary"
          icon={<EraseIcon />}
          text="Annuler les modifications"
          onClick={() => {
            props.onUsernameChange('');
            props.onRoleChange('');
          }}
        />
      </div>
    </div>
  );
};

export default PlaygroundCard;

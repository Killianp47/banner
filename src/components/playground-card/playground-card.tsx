import { EraseIcon } from '../../assets/icons';
import Button from '../buttons';

type PlaygroundCardProps = {
  username: string;
  role: string;
  onUsernameChange: (username: string) => void;
  onRoleChange: (role: string) => void;
  positionXPseudo: number;
  positionYPseudo: number;
  onPositionXPseudoChange: (positionX: number) => void;
  onPositionYPseudoChange: (positionY: number) => void;
  positionXRole: number;
  positionYRole: number;
  onPositionXRoleChange: (positionX: number) => void;
  onPositionYRoleChange: (positionY: number) => void;

};

const PlaygroundCard = (props: PlaygroundCardProps) => {
  return (
    <div className="order-2 xl:order-none min-w-[20%] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-figtree">
        Personnalisation de la bannière
      </h2>
      <div className="flex flex-col gap-4">
  {/* Progress bars for X and Y position */}
  <div className="flex flex-col gap-2">
    <div>
      <label
        htmlFor="positionXPseudo"
        className="text-foreground-primary text-sm block mb-1"
      >
        Horizontal pseudo
      </label>
      <input
        type="range"
        id="positionXPseudo"
        min="0"
        max="1000"
        value={props.positionXPseudo}
        onChange={(e) => props.onPositionXPseudoChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground-accent"
      />
    </div>
    <div>
      <label
        htmlFor="positionYPseudo"
        className="text-foreground-primary text-sm block mb-1"
      >
        Vertical pseudo
      </label>
      <input
        type="range"
        id="positionYPseudo"
        min="0"
        max="300"
        value={props.positionYPseudo}
        onChange={(e) => props.onPositionYPseudoChange(Number(e.target.value))}
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
    <div className="flex flex-col gap-2">
    <div>
      <label
        htmlFor="positionXRole"
        className="text-foreground-primary text-sm block mb-1"
      >
        Horizontal rôle
      </label>
      <input
        type="range"
        id="positionXRole"
        min="0"
        max="1000"
        value={props.positionXRole}
        onChange={(e) => props.onPositionXRoleChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground-accent"
      />
    </div>
    <div>
      <label
        htmlFor="positionYRole"
        className="text-foreground-primary text-sm block mb-1"
      >
        Vertical rôle
      </label>
      <input
        type="range"
        id="positionYRole"
        min="0"
        max="300"
        value={props.positionYRole}
        onChange={(e) => props.onPositionYRoleChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground-accent"
      />
    </div>
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

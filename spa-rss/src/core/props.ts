export type ButtonProps = {
  title: string;
  className?: string;
  onClick: () => void;
};

export type RadioProps = {
  title: string;
  value: string;
  name: string;
  className?: string;
  onChange: (value: string) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
};

export type SwitchProps = {
  beforeText?: string;
  afterText?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange: (isChecked: boolean) => void;
};

export type FigureProps = {
  backgroundUrl?: string;
  color?: string;
  scale?: number;
  className?: string;
  isChecked?: boolean;
  onClick: () => void;
};

export type PlaceholderProps = {
  isShown?: boolean;
  className?: string;
  message: string;
};

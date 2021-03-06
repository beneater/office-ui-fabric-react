import { memoizeFunction } from '../../Utilities';
import { mergeStyleSets } from '../../Styling';
import { IButtonStyles } from './Button.types';

export interface IButtonClassNames {
  root?: string;
  flexContainer?: string;
  textContainer?: string;
  icon?: string;
  label?: string;
  menuIcon?: string;
  description?: string;
  screenReaderText?: string;
}

export const getBaseButtonClassNames = memoizeFunction(
  (
    styles: IButtonStyles,
    className: string,
    variantClassName: string,
    iconClassName: string | undefined,
    menuIconClassName: string | undefined,
    disabled: boolean,
    checked: boolean,
    expanded: boolean,
    isSplit: boolean | undefined
  ): IButtonClassNames => {
    const isExpanded = expanded && !isSplit;
    return mergeStyleSets({
      root: [
        'ms-Button',
        styles.root,
        variantClassName,
        checked && ['is-checked', styles.rootChecked],
        isExpanded && [
          'is-expanded',
          styles.rootExpanded,
          {
            selectors: {
              ':hover .ms-Button-icon': styles.iconExpandedHovered,
              // menuIcon falls back to rootExpandedHovered to support original behavior
              ':hover .ms-Button-menuIcon': styles.menuIconExpandedHovered || styles.rootExpandedHovered,
              ':hover': styles.rootExpandedHovered
            }
          }
        ],
        disabled && ['is-disabled', styles.rootDisabled],
        !disabled &&
          !isExpanded &&
          !checked && {
            selectors: {
              ':hover': styles.rootHovered,
              ':hover .ms-Button-label': styles.labelHovered,
              ':hover .ms-Button-icon': styles.iconHovered,
              ':hover .ms-Button-description': styles.descriptionHovered,
              ':hover .ms-Button-menuIcon': styles.menuIconHovered,
              ':focus': styles.rootFocused,
              ':active': styles.rootPressed,
              ':active .ms-Button-icon': styles.iconPressed,
              ':active .ms-Button-description': styles.descriptionPressed,
              ':active .ms-Button-menuIcon': styles.menuIconPressed
            }
          },
        disabled && checked && [styles.rootCheckedDisabled],
        !disabled &&
          checked && {
            selectors: {
              ':hover': styles.rootCheckedHovered,
              ':active': styles.rootCheckedPressed
            }
          },
        className
      ],
      flexContainer: ['ms-Button-flexContainer', styles.flexContainer],
      textContainer: ['ms-Button-textContainer', styles.textContainer],
      icon: [
        'ms-Button-icon',
        iconClassName,
        styles.icon,
        isExpanded && styles.iconExpanded,
        checked && styles.iconChecked,
        disabled && styles.iconDisabled
      ],
      label: ['ms-Button-label', styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
      menuIcon: [
        'ms-Button-menuIcon',
        menuIconClassName,
        styles.menuIcon,
        checked && styles.menuIconChecked,
        disabled && styles.menuIconDisabled,
        !disabled &&
          !isExpanded &&
          !checked && {
            selectors: {
              ':hover': styles.menuIconHovered,
              ':active': styles.menuIconPressed
            }
          },
        isExpanded && ['is-expanded', styles.menuIconExpanded]
      ],
      description: [
        'ms-Button-description',
        styles.description,
        checked && styles.descriptionChecked,
        disabled && styles.descriptionDisabled
      ],
      screenReaderText: ['ms-Button-screenReaderText', styles.screenReaderText]
    });
  }
);

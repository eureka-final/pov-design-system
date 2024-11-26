import type { Size } from '../../types/index';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import Label from '../Label/Label';
import SupportingText from '../SupportingText/SupportingText';
import {
  getSizeStyling,
  getTextareaStyling,
  textareaContainerStyling,
} from './Textarea.style';

export interface TextareaProps extends Omit<ComponentPropsWithRef<'textarea'>, 'size'> {
  label?: string;
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  isError?: boolean;
  supportingText?: string;
}

const Textarea = (
  { label, size = 'medium', isError = false, supportingText, ...attributes }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) => (
    <div css={textareaContainerStyling}>
      {label && (
        <Label id={attributes.id} required={attributes.required}>
          {label}
        </Label>
      )}
      <textarea
        ref={ref}
        css={[getTextareaStyling(isError), getSizeStyling(size)]}
        {...attributes}
      />
      {supportingText && <SupportingText isError={isError}>{supportingText}</SupportingText>}
    </div>
  );

export default forwardRef(Textarea);

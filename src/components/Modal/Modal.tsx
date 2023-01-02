import * as DialogPrimitive from '@radix-ui/react-alert-dialog';
import cx from 'classnames';
import React from 'react';

const AlertDialog = DialogPrimitive.Root;
const AlertDialogTrigger = DialogPrimitive.Trigger;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogPrimitive.AlertDialogOverlayProps
>(({ className, ...props }, forwardedRef) => (
  <DialogPrimitive.Overlay
    ref={forwardedRef}
    className={cx('fixed inset-0 z-20 bg-black/50', className)}
    {...props}
  />
));

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogPrimitive.AlertDialogContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <AlertDialogOverlay />
    <DialogPrimitive.Content
      className={cx(
        'fixed z-50',
        'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
        'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
        'bg-white dark:bg-gray-800',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

const AlertDialogTitle = DialogPrimitive.Title;
const AlertDialogDescription = DialogPrimitive.Description;
const AlertDialogAction = DialogPrimitive.Action;
const AlertDialogCancel = DialogPrimitive.Cancel;

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
};

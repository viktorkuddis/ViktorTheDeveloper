import * as React from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { ScrollArea } from '@base-ui/react/scroll-area';
import styles from './OutsideScrollingModal.module.css';

import { X } from 'lucide-react';


type Props = {
    title: string,
    intro: React.ReactNode,
    bodyContent: React.ReactNode
    handle: ReturnType<typeof Dialog.createHandle>
}

// Dokumentation om hurman triggar dialog:
// https://base-ui.com/react/components/dialog#multiple-triggers

export default function OutsideScrollDialog({ title, bodyContent, handle }: Props) {
    const popupRef = React.useRef<HTMLDivElement>(null);
    return (
        <Dialog.Root handle={handle}>



            {/* <Dialog.Trigger>Open dialog</Dialog.Trigger> */}
            <Dialog.Portal>
                <Dialog.Backdrop className={styles.Backdrop} />
                <Dialog.Viewport className={styles.Viewport}>
                    <ScrollArea.Root style={{ position: undefined }} className={styles.ScrollViewport}>
                        <ScrollArea.Viewport className={styles.ScrollViewport}>
                            <ScrollArea.Content className={styles.ScrollContent}>
                                <Dialog.Popup ref={popupRef} className={styles.Popup} initialFocus={popupRef}>

                                    <div className={styles.PopupHeader}>
                                        <Dialog.Title className={styles.Title}>
                                            {title}
                                        </Dialog.Title>
                                        <Dialog.Close className={styles.Close} aria-label="Close">
                                            <X className={styles.CloseIcon} />
                                        </Dialog.Close>
                                    </div>

                                    {/* <Dialog.Description className={styles.Description}>
                                        {intro}
                                    </Dialog.Description> */}

                                    <div className={styles.Body}>
                                        {bodyContent}
                                    </div>

                                </Dialog.Popup>
                            </ScrollArea.Content>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar className={styles.Scrollbar}>
                            <ScrollArea.Thumb className={styles.ScrollbarThumb} />
                        </ScrollArea.Scrollbar>
                    </ScrollArea.Root>
                </Dialog.Viewport>
            </Dialog.Portal>




        </Dialog.Root >
    );
}





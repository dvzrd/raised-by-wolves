import React from "react";
import ModalVideo from "react-modal-video";
import classNames from "classnames";

import "react-modal-video/scss/modal-video.scss";
import styles from "./Modal.module.scss";

export const Modal = ({
  autoplay = 1,
  channel = "youtube",
  className,
  closeModal,
  isOpen = false,
  videoId,
  ...rest
}) => (
  <aside className={classNames(styles.modal, className)}>
    <ModalVideo
      autoplay={autoplay}
      channel={channel}
      isOpen={isOpen}
      videoId={videoId}
      onClose={closeModal}
      {...rest}
    />
  </aside>
);

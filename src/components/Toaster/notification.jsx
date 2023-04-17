import { toast } from "react-hot-toast";

export function ToasterSuccess({ duration, title, emoji, style, position }) {
  return toast.success(title, {
    duration: duration,
    icon: emoji,
    style: style,
    position: position,
  });
}
export function ToasterError({ duration, title, emoji, style, position }) {
  return toast.error(title, {
    duration: duration,
    icon: emoji,
    style: style,
    position: position,
  });
}
export function ToasterMultiLine({ duration, title, emoji, style, position }) {
  return toast(title, {
    duration: duration,
    icon: emoji,
    style: style,
    position: position,
  });
}
export function ToasterPromise({
  settings,
  duration,
  loadingText,
  successText,
  erorrText,
  style,
  position: position,
}) {
  return toast.promise(settings, {
    loading: loadingText,
    success: successText,
    erorrText: erorrText,
    duration: duration,
    style: style,
    position: position,
  });
}

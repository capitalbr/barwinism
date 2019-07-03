import * as AnnotationAPIUtil from "../util/annotation_util";

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";

export const createAnnotation = (annotation) => {
  return dispatch => {
    return AnnotationAPIUtil.createAnnotation(annotation).then(annotation => dispatch({type: RECEIVE_ANNOTATION, annotation}));
  }
}
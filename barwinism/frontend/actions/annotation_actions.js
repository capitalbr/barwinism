import * as AnnotationAPIUtil from "../util/annotation_util";

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNO = "RECEIVE_ANNO";

// THUNKS
export const createAnnotation = (annotation) => {
  return dispatch => {
    return AnnotationAPIUtil.createAnnotation(annotation)
    .then(annotation => dispatch({type: RECEIVE_ANNOTATION, annotation}));
  }
}

export const updateAnnotation = (annotation) => {
  return dispatch => {
    return AnnotationAPIUtil.updateAnnotation(annotation)
    .then(annotation => dispatch({ type: RECEIVE_ANNOTATION, annotation }));
  }
}

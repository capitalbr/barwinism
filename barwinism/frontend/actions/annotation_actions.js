import * as AnnotationAPIUtil from "../util/annotation_util";

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNO = "RECEIVE_ANNO";

// THUNKS
export const createAnnotation = (annotation) => {
  return dispatch => {
    return AnnotationAPIUtil.createAnnotation(annotation).then(annotation => dispatch({type: RECEIVE_ANNOTATION, annotation}));
  }
}


// SIMPLE, NO NEED TO HIT BACK END, BEING BROUGHT DOWN WITH TRACK SO ALREADY
// IN STATE
// SUDDENLY THIS SEEMS UNNECESSARY
// export const fetchAnno = (annoId) => {
//   return({
//     type: RECEIVE_ANNO, 
//     annoId 
//   })
// }
export const createAnnotation = (annotation) => {
  return($.ajax({
    method: "POST",
    url: "/api/annotations",
    data: {annotation}
  }))
}
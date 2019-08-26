export const createAnnotation = (annotation) => {
  debugger
  return($.ajax({
    method: "POST",
    url: "/api/annotations",
    data: { annotation }
  }))
}

export const updateAnnotation = (annotation) => {
  debugger
  return ($.ajax({
    method: "PATCH",
    url: `/api/annotations/${annotation.id}`,
    data: { annotation }
  }))
}
class Api::AnnotationsController < ApplicationController
  def create
    @anno = Annotation.new(annotation_params)
    @anno.user_id = current_user.id

    
    if @anno.save
      render "api/annotations/show"
    end
  end

  private
  def annotation_params
    params.require(:annotation).permit(:track_id, :body, :upvotes, :anno_id)
  end
end

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:field], 
      params[:user][:password]
      )
    
    if @user 
      login(@user)
      render "api/users/show"
    else
      render json: ["Username and/or Password Invalid"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["There is no one logged in"], status: 404
    end
  end
end

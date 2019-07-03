Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :show, :update]
    resources :artists, only: [:show]
    resources :albums, only: [:show]
    resources :annotations, only: [:create]
  end
  root "static_pages#root"
end



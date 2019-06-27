Rails.application.routes.draw do
  resources :albums
  resources :artists
  resources :tracks
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end



Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resources :channels, only: [:index] #index of direct message channels belonging to a user
    end
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :destroy, :index, :show, :patch]
    resources :channels, only: [:create, :destroy, :show, :patch]
    resources :messages, only: [:create]
 end
end

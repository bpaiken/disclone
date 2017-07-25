Rails.application.routes.draw do
  root to: 'static_pages#root'
  
post '/pusher', to: 'pusher#webhook'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :destroy, :show, :update]
    resources :channels, only: [:index, :create, :destroy, :show, :update]
    resources :messages, only: [:create]
 end
end

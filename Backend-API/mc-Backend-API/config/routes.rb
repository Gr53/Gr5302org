Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :recycling_centers
  resources :multimedia
  resources :multimedia_types
  resources :materials
  resources :material_types
  resources :users
  resources :roles
end

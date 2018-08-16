class HomeController < ApplicationController
  def index
  		render json:{status: 'SUCCESS', message: 'Loaded articles successfully', data: articles}, 
    status: :ok
  end
end

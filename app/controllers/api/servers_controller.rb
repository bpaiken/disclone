class Api::ServersController < ApplicationController

  def index
    @servers = Server.all
  end

  def show
    @server = Server.find(params[:id])
  end

  def create
    server = Server.new(server_params)
    Channel.create(name:'General', topic: "")
    default = Channel.all[-1]
    server.default_id = default.id
    
    if server.save
      @server = server
      default.update(server_id: @server.id)
      
      Subscription.create(user_id: current_user.id, server_id: @server.id)
      render '/api/servers/show' 
    else
      render json: @server.errors.full_messages
    end
  end

  def update
    @server = server.find(params[:id])
    @server.update(server_params)
  end

  def destroy
    @server = Server.find(params[:id])
    @server.destroy
    #render updated index?
  end

  private
  def server_params
    params.require(:server).permit(:name, :avatar)
  end
end

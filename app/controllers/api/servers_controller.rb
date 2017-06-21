class Api::ServersController < ApplicationController

  def index
    @servers = Server.all
  end

  def show
    @server = Server.find(params[:id])
  end

  def create
    @server = Server.new(server_params)

    if @server.save
      render :show @server
    else
      render :json @server.errors.full_messages
    end
  end

  # def edit
    
  # end

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
    params.require(:server).permit(:name)
  end
end

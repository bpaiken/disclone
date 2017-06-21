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
      #render server errors
    end
  end


  def patch
    
  end


  def destroy
    @server = Server.find(:id)
    @server.destroy
    #render updated index?
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end

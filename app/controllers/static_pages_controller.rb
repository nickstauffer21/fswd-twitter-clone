class StaticPagesController < ApplicationController
  def dashboard
  end
  def login
    render 'login'
  end
end

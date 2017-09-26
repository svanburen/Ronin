function Render()
{
  this.el = document.createElement('canvas'); this.el.id = "render";

  this.install = function()
  {
    ronin.el.appendChild(this.el);
  }

  this.update = function()
  {
    this.el.width = window.innerWidth * 2;
    this.el.height = window.innerHeight * 2;
    this.el.style.width = (window.innerWidth)+"px";
    this.el.style.height = (window.innerHeight)+"px";
  }

  this.context = function()
  {
    return this.el.getContext('2d');
  }

  this.resize_to = function(size)
  {
    this.el.width = size.width * 2;
    this.el.height = size.height * 2;
    this.el.style.width = size.width+"px";
    this.el.style.height = size.height+"px";
  }

  this.clear = function()
  {
    ronin.render.context().clearRect(0, 0, this.el.width, this.el.height);
  }
}
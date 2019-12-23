(function(){
    function PageList(options){
        for (var i in options){
            this[i] = options[i];
        }
        var obj = this;
        this.first.onclick = function() {
            obj.page = 1;
            obj.onChange();
        };
        this.prev.onclick = function (){
            obj.page = (obj.page > 1) ? (obj.page - 1) : 1;
            obj.onChange();
        };
        this.nextonclick = function () {
            obj.page = (obj.page >= obj.maxPage) ? obj.maxPage : (obj.maxPage + 1);
            obj.onChange();
        };
        this.last.onclick = function (){
            obj.page = obj.maxPage;
            obj.onChange();
        };
    }
    PageList.prototype.updateStatus = function (){
        this.first.disabled = (this.page <= 1);
        this.prev.disabled = (this.page <= 1);
        this.next.disabled = (this.page >= this.maxPage);
        this.last.disabled = (this.page >= this.maxPage);
        this.pageNum.innerHTML = this.page;
    };
})
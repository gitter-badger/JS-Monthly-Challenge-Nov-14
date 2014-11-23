// Generated by LiveScript 1.3.1
var SearchModel;
SearchModel = function(postObserver){
  var generateApiUrl, ret;
  generateApiUrl = function(q){
    return "https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&q=" + encodeURIComponent(q) + "&site=stackoverflow&filter=!.FjueITs9Sv-y7SwxnSKteO45ZXd5";
  };
  ret = {
    doubt: ko.observable()
  };
  ret.delayedDoubt = ret.doubt.extend({
    rateLimit: {
      timeout: 1000,
      method: 'notifyWhenChangeStop'
    }
  });
  console.log(this);
  ret.delayedDoubt.subscribe(function(doubt){
    var xhr;
    console.log('I am the genie');
    if (doubt == null) {
      return;
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', generateApiUrl(doubt));
    xhr.responseType = 'json';
    xhr.onload = function(){
      var i$, ref$, len$, post;
      console.log('booya');
      for (i$ = 0, len$ = (ref$ = xhr.response.items).length; i$ < len$; ++i$) {
        post = ref$[i$];
        postObserver.onNext(post);
      }
    };
    xhr.send();
  });
  return ret;
};
function actualizaCacheDinamico(dynamicsCache, req,res){
    if(res.ok){
        return caches.open(dynamicsCache).then(cache=>{
            cache.put(req,res.clone());
            return res. clone();
        });
    }else{
        return res;
    }
}
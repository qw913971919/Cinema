const state={//数据
    nm:JSON.parse(window.localStorage.getItem('nm'))||'北京',
    id:JSON.parse(window.localStorage.getItem('id'))||1,
};

const actions={

};

const mutations={//处理数据,当外部有数据传递来，调用这里的方法，修改store里边的状态管理公共数据
    CITY_INFO(state,payload){
        state.nm=payload.nm,
        state.id=payload.id,
        window.localStorage.setItem('nm',JSON.stringify(payload.nm))
        window.localStorage.setItem('id',JSON.stringify(payload.id))
    }
};

export default {
    namespaced:true,
    state,
    actions,
    mutations
}
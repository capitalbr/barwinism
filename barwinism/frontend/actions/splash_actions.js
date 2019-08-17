
import * as SplashAPIUtil from "../util/splash_util";
export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = (news) => {
  return ({
    type: RECEIVE_NEWS,
    news
  })
}


export const fetchNews = () => {
  return dispatch => {
    return SplashAPIUtil.fetchNews().then(news => dispatch(receiveNews(news)));
  }
}




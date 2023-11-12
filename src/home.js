import React from 'react';
import Logo from './img/r_logo.png';
import Test from './img/test.png';
import Up from './img/up.jpg';
import Down from './img/down.webp';
import './css/r_home.css';
import Login from './login.js';
import Signup from './signup.js';
import Menubar from './menubar.js';
import L_Login from './m_login.js';
import { Link, useNavigate, BrowserRouter, Route, Routes, } from 'react-router-dom';
import Board from './board.js';



function Home() {
  
    return (
      <>
    
    <div id="page">
      <header className='main_header'>
        <div className="logo">
          <img className='r_logo' src={Logo} alt="Logo" />
        </div>
        <div className="top_menu">
            <Login/> <span>|</span>
            <Signup/> 
        </div>
      </header>
        <div className='header_nav'>
          <div className='inner'>
            <nav>
              <Link to="./board">게시판</Link> |
              <Link to="./review">리뷰</Link> |
              <Link to="./board">게시판</Link> |
              <Link to="./review">리뷰</Link> 
            </nav>
          </div>
        </div>
      <main id="container">
        <section className="review_content">
          <h1>운동 부위</h1>
          <div className="review">
            <div className="review1">
              <Link to="./review_up">
              <h3>상체 </h3> 
                <img className="review_icon1" src={Up} />
              </Link>
              
            </div>
            <div className="review2">
            <Link to="./review_down">
                <h3>하체</h3> 
                <img className="review_icon2" src={Down} />
              </Link>
              

            </div>
          </div>
        </section>
        <section className="down_content">
          <div className='test'>
          <div className="hot_board_list_wrap">
          <div className='board_hot'><h1>🔥인기글</h1></div>
            <div className="board_list">
          
              <div className="top">
                <div className="title">제목</div>
                <div className="writer">글쓴이</div>
                <div className="date">작성일</div>
                <div className="count">조회</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">김이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
            </div>
          </div>

          <div className="new_board_list_wrap">
          <div className='board_hot'><h1>🕒최신글</h1></div>
            <div className="board_list">
              <div className="top">
                
                <div className="title">제목</div>
                <div className="writer">글쓴이</div>
                <div className="date">작성일</div>
                <div className="count">조회</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">김이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
    <div className='footer'></div>
  </>
    );
  }
  export default Home;
  
import * as React from "react";
import { IoMdArrowForward } from "react-icons/io";

import "./Contents.scss";

export class Contents extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="contents-container">
        <article className="hello">
          <div className="inner">
            <h2 className="title">INTRO</h2>
            <p className="sub-title">간단 소개</p>

            <p className="description01">
              새로운 기술을 배우고 나누는 일을 좋아합니다.
            </p>

            <p className="description02">
              <a href="https://ithub.tistory.com/" className="link">
                작은 IT 블로그
              </a>
              를 운영중이고, 각 분야의 여러 사람들과 함께
              <br />
              협업하여 많은 사람들에게 필요한 무언가를 만들어냈을때
              <br />큰 보람을 느끼는 개발자입니다.
            </p>

            <p className="description03">
              <p className="simple-career">
                {/* <span>아이지넷</span> / 하이브리드 앱, 웹 개발 / 2018.07 ~ 2019.09\
                                <span>에이치앤비라이프</span> / 하이브리드 앱, 웹 개발 / 2017.03 ~ 2018.07
                                <span>LEESET(창업)</span> / 전체 서비스 개발 (앱, 웹, 서버) / 2016.04 ~ 2017.03
                                <span>오픈베이스</span> / 보안 솔루션 연구 및 개발 (백엔드) / 2015.03 ~ 2016.03 */}
                <span>지텐션</span> / 백엔드 개발, 백오피스 개발 / 2020.01 ~
                현재 재직중
                <br />
                <span>아이지넷</span> / 하이브리드 앱, 웹 개발 / 2018.07 ~
                2019.09
                <br />
                <span>에이치앤비라이프</span> / 하이브리드 앱, 웹 개발 / 2017.03
                ~ 2018.07
                <br />
                <span>LEESET(창업)</span> / 전체 서비스 개발 (앱, 웹, 서버) /
                2016.04 ~ 2017.03
                <br />
                <span>오픈베이스</span> / 보안 솔루션 연구 및 개발 (백엔드) /
                2015.03 ~ 2016.03
              </p>

              <a href="/portfolio/career.html" target="_blank">
                <span className="text">경력 자세히 보기</span>
                <span className="circle-icon">
                  <IoMdArrowForward />
                </span>
              </a>
            </p>
          </div>
        </article>

        <article className="work">
          <div className="inner">
            <h2 className="title">HISTORY</h2>
            <p className="sub-title">FEATURED WORK</p>
            <div className="work-list clear">
              <div className="left">
                <div className="work-item">
                  <figure>
                    <img src="assets/img/security.jpg" className="work_image" />
                    <figcaption className="work-caption">
                      <div className="caption-text">
                        <strong className="caption-title">오픈베이스</strong>
                        <p className="caption-desc">보안솔루션 연구 및 개발</p>
                      </div>
                      <a href="http://www.openbase.co.kr" target="_blank"></a>
                    </figcaption>
                  </figure>
                </div>

                <div className="work-item">
                  <figure>
                    <img src="assets/img/gym.jpg" className="work_image" />
                    <figcaption className="work_caption">
                      <div className="caption-text">
                        <strong className="caption-title">두개더</strong>
                        <p className="caption-desc">
                          SNS 기반 퍼스널트레이닝 매칭 O2O 서비스
                        </p>
                      </div>
                      <a href="#a" onClick={this.showPopup.bind(this)}></a>
                    </figcaption>
                  </figure>
                </div>

                <div className="work-item">
                  <figure>
                    <img
                      src="assets/img/8daysplus.jpg"
                      className="work_image"
                    />
                    <figcaption className="work_caption">
                      <div className="caption-text">
                        <strong className="caption-title">
                          에잇데이즈플러스
                        </strong>
                        <p className="caption-desc">
                          8DAYSPLUS는 현대인의 일과 삶의 조화로운 균형을 위해
                          다양한 자기계발, 취미 클래스/액티비티/콘텐츠를
                          제공하는 서비스
                        </p>
                      </div>
                      <a href="https://www.the8days.com/" target="_blank"></a>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="right">
                <div className="work-item">
                  <figure>
                    <img src="assets/img/golf.jpg" className="work_image" />
                    <figcaption className="work_caption">
                      <div className="caption-text">
                        <strong className="caption-title">리프레쉬골프</strong>
                        <p className="caption-desc">
                          필요한 만큼 결제하고 필요한 곳을 합리적으로 이 용하는
                          골프 O2O 서비스
                        </p>
                      </div>
                      <a href="https://refreshgolf.com" target="_blank"></a>
                    </figcaption>
                  </figure>
                </div>

                <div className="work-item">
                  <figure>
                    <img src="assets/img/yoga.jpg" className="work_image" />
                    <figcaption className="work_caption">
                      <div className="caption-text">
                        <strong className="caption-title">리프레쉬클럽</strong>
                        <p className="caption-desc">
                          기업 임직원을 대상으로 다양한 스포츠센터와 골
                          프시설들을 하나의 멤버십 으로 언제 어디서나 저 렴하게
                          이용할 수 있도록 도와주는 피트니스 O2O 서비스
                        </p>
                      </div>
                      <a href="https://refreshclub.co.kr" target="_blank"></a>
                    </figcaption>
                  </figure>
                </div>

                <div className="work-item">
                  <figure>
                    <img
                      src="assets/img/insurance.jpg"
                      className="work_image"
                    />
                    <figcaption className="work_caption">
                      <div className="caption-text">
                        <strong className="caption-title">보험닥터</strong>
                        <p className="caption-desc">
                          인공지능설계사 보험닥터 하이브리드 앱
                        </p>
                      </div>
                      <a
                        href="https://www.myrealplan.co.kr"
                        target="_blank"
                      ></a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  private showPopup() {
    window.alert("준비중입니다.");
  }
}

import React from "react";
import Chart from "../../ChartsReal";
import { Tween } from "react-gsap";
import { Power4 } from "gsap";
import { useSelector } from "react-redux";

const Model = () => {
  const title = "Our track record";
  const content = [
    ` December 1964 - Birth Of The Debt Supercycle
    In the Mid-1960s, the concept of the debt supercycle was developed by A. Hamilton Bolton, founder of BCA Research, in the pages of the Bank Credit Analyst. `,
    `December 1968 - Inflation Is Coming!
    Ahead of the inflationary 1970s, BCA Research alerted its clients that US inflation is likely to get out of hand.`,
    ` December 1970 - 1970s Bear Market
    Based on a thorough analysis of liquidity and economic conditions, BCA Research warned that the probability of a severe bear market was at its highest in decade, a very out of consensus call.`,
    `November 1978 - The Inflation End Is Near?
    In the late 1970's, when the prevalent view was that inflation would only accelerate as far as the eye can see, BCA Research cautioned that conditions were becoming increasingly disinflationary.`,
    `May 1986 - Ready For A Crash?
    In the run up to the 1987 Black Monday, BCA Research correctly diagnosed the Mania in the stock market and cautioned that a deep and severe correction was on its way.`,
    `January 1995 - The Tech Boom
    In the mid-1990s, BCA Research identified a structural upturn in productivity. This led BCA Research to be more positive on growth, on profits and on technology plays as well.`,
    `March 1997 - The Asian Deflationary Shock
    BCA Research’s analysis of Asian excess capacity led us to quickly ascertain that the Asian Crisis would have a deep deflationary impact for the global economy.
    `,
    `October 1999 - Oil Has Hit Rock Bottom 
    Despite the prevalent bearishness on crude, BCA Research forecasted that oil is making a once-in-a-lifetime bottom as supply growth would be constrained.`,

    `March 2000 - The Emerging Markets Play Of The Decade
  BCA Research warns of a dollar bear market and recommended its clients to overweigh emerging market assets and commodity plays.`,
    `November 2002 - Reflation To Rescue Risk Assets
    Due to cheap valuations and a surge in central-bank liquidity, BCA Research indicators signaled our clients to move into DM and EM stocks as well as into corporate credit.`,
    `June 2004 - An Overflow Of Savings Is Shoring Up Assets
    Before it became a consensus view, BCA Research realized that plentiful Asian savings were gushing around the globe, keeping interest rates low and asset prices high.`,
    `July 2005 - Brewing Trouble For The Housing Bubble
    Ahead of the heard, in July 2005 BCA Research identified the risks to the US economy created by a housing bubble.`,
    `February 2008 - Deleveraging Ahead
    In early 2008, BCA Research called for an extended deleveraging by financial institutions and consumers, creating serious deflationary risks for the global economy.`,
    `October 2008 - Don’t Fear QE Inflation
    BCA Research correctly recognized that QE is not going to be inflationary. As a result, we moved our fixed-income exposure away from government bonds to high-quality spread products.`,
    `October 2008 - Don’t Fear QE Inflation
    BCA Research correctly recognized that QE is not going to be inflationary. As a result, we moved our fixed-income exposure away from government bonds to high-quality spread products.`,
    `February 2009 - Buy Stocks
    By March 2009, BCA Research repeatedly warned that the bear-market lows had been made and that stocks were set to rally substantially.  We favored beaten down financials and emerging markets.`,
    ,
    `November 2010 - A Bear Is Coming For EM Assets
    By the end of 2010, BCA Research sours on EM assets, which changed our recommendation to underweight emerging markets relative to US equities. Soon after, BCA Research also warned of an upcoming top in EM currencies. Both calls proved prescient.`,
    `October 2011 - The Euro Area Is Here To Stay
    In the midst of the euro crisis, BCA Research forecasted, with high conviction, that no country would leave the Euro Area. Hence, investors should use any increase in the euro breakup risk premium to buy European assets.`,
    `May 2012 – Trouble Ahead for Japan
    BCA Research predicted “Abenomics” before Abe, forecasting that a major reflationary upturn in Japan was coming.`,
    `September 2015 - Riding The Populist Wave
    As early as September 2015, and amidst much skepticism, BCA Research argued that Trump should be taken seriously and that populism was here to stay. BCA Research went on to predict that Trump would become the next president of the United States.`,
    `December 2016 - Buy Oil
    After oil had fallen from $100/bbl in mid-2014 to $25/bbl in January 2016, BCA Research analysis of supply trends made us buy crude. BCA Research stayed bullish through 2017, even as the consensus was turning bearish mid-year.  `,
    `July 2016 - End Of The 35-Year Bond Bull Market
    On the day when 10-year Treasury yields closed at an all-time low of 1.37%, BCA Research shifted its view on bonds, moving to a more bearish stance. We argued correctly at the time that both cyclical and structural forces would conspire to put in a bottom for yields.`,
    `November 2016 - Trump: Good for stocks, But Be Wary Of A Sino-U.S. Trade War
    BCA Research predicted that the Trump presidency would be positive for the markets, but would eventually lead to a US-China trade war.`,
    `January 2018 - A New EM Bear Market 
    BCA Research's battles common market narrative that EM stocks are cheap and reiterated its negative stance on EM.`,
  ];
  const state = useSelector((state) => state.model);
  return (
    <>
      {state.id === 3 && (
        <div
          className="w-[100%] flex justify-center  absolute top-[110px] h-[560px]"
          style={{ zIndex: 1009 }}
        >
          <Tween
            from={{
              clipPath: "inset(0px 670px 1px 680px)",
            }}
            to={{
              clipPath: !(state.currId === 3)
                ? "inset(0px 670px 1px 680px)"
                : "inset(0px 0vw 1px 0px)",
            }}
            ease={Power4.easeInOut}
            duration={0.7}
          >
            <div className="w-[100%] max-w-[1330px] h-[100%] backdrop-blur-xl px-[50px] flex justify-between items-center bg-[#ffffff17]">
              <div className="w-[100%] flex flex-col justify-center ">
                <h1 className="text-[#000] border-l-[8px] border-[#0d383f] pl-[30px] font-medium text-[35px] mb-[10px]">
                  {title}:
                </h1>
                <div className="w-[100%] overflow-y-auto scroll-bar-cool h-[400px] pr-[50px]">
                  {content.map((item, i) => {
                    return (
                      <p
                        key={i}
                        className="text-[#000] text-[18px] mt-[10px] font-medium"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
              {/* <div className="w-[48%] h-[400px] ">
                <Chart />
              </div> */}
            </div>
          </Tween>
        </div>
      )}
    </>
  );
};

export default Model;

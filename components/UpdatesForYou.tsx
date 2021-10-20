import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import styles from "../styles/Home.module.css";
import { UpdatesAPI } from "../pages/api/update/updates.api";
import { Update } from "../pages/api/update/update.entity";
import Link from "next/link";
import Image from "next/image";

// const myLoader = ({src}:any) => {
//   return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

function UpdatesForYou() {
  const [informs, setInforms] = useState<Update[]>([]);

  const banner = (status: string) => {
    if (status === "CLOSE") {
      return "none";
    }

    return;
  };

  useEffect(() => {
    const fetchInforms = async () => {
      const response = await UpdatesAPI.getAllUpdates();
      setInforms(response);
    };

    fetchInforms();

  }, []);

  return (

      <div className={styles.update}>
        <div className={styles.title_update}>Updates for You</div>
        <div className={styles.banner}>
          <Carousel autoplay>
            {informs.map((inform, index) => {
              return (
                <div key={index}>
                  <div
                    className={styles.carousel}
                    style={{ display: banner(`${inform.status}`) }}
                  >
                    <span className={styles.image}>
                      {/* <Image src={inform.img} alt="user02" width={120} height={120}/> */}
                      <img src={inform.img} alt="test_img" />
                      {/* {inform.img} */}
                    </span>
                    <span className={styles.content}>
                      <div className={styles.text}>
                        <span className={styles.title}>{inform.title} </span>
                        <span>{inform.subtitle}</span>
                      </div>
                      <Link href="/">
                        <a className={styles.link}>{inform.url}</a>
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
  );
}

export default UpdatesForYou;

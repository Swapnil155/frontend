import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
      <div className="text-content">
        <p>
          <strong>Pellentesque habitant morbi tristique</strong> senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
          sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>{" "}
          Mauris placerat eleifend leo. Quisque sit amet est et sapien
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,{" "}
          <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
          elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
          tempus lacus enim ac dui. <Link to="/">Donec non enim</Link> in turpis
          pulvinar facilisis. Ut felis.
        </p>
        <figure className="figure mb-3">
          <img
            className="figure-img img-fluid w-100"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1482463084673-98272196658a.jpg"
            alt="Example blog post alt."
          />
          <figcaption className="figure-caption text-center">
            Photo by Jack Tran, New York{" "}
          </figcaption>
        </figure>
        <h2>Header Level 2</h2>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>
        <blockquote className="blockquote blockquote-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
          molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
          mollis, tellus est malesuada tellus, at luctus turpis elit sit amet
          quam. Vivamus pretium ornare est.
        </blockquote>
        <h3>Header Level 3</h3>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
        <p>
          <img
            className="img-fluid"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1499695867787-121ffb7950bf.jpg"
            alt="Example blog post alt"
          />
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi.{" "}
        </p>
        <p>
          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
          orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
          pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus{" "}
        </p>
        <hr />
      </div>
  );
};

export default Content;

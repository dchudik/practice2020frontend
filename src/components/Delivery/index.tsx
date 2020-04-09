import React from "react";
import styled from "styled-components";

interface ITitle {
  color?: "red" | "black";
}
const DeliveryBlock = styled.div`
  margin-top: 80px;
  margin-left: 5%;
  min-height: 77vh;
`;
const Title = styled.p<ITitle>`
  margin: 20px 0 0 0;

  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "black")};
`;
const Description = styled.p`
  font-size: 20px;
`;
const Delivery = () => {
  return (
    <DeliveryBlock>
      <Title>Доставка по Санкт-Петербургу</Title>
      <Description>
        Интернет-магазин Sumochka.com осуществляет доставку курьером по Москве,
        Санкт-Петербургу и всем городам России.Товар также можно получить
        самостоятельно в одном из 3445 пунктов выдачи заказов.
      </Description>
      <Title color="red">Курьерская доставка</Title>
      <Description>
        В Вашем городе курьерскую доставку осуществляет курьерская служба IML{" "}
        <br />
        Стоимость доставки службой IML - бесплатно (срок доставки - 1 день){" "}
        <br />
        При получении заказов на пунктах самовывоза и при курьерской доставке в
        Вашем городе возможна только наличная оплата
      </Description>
      <Title color="red">Самовывоз</Title>
      <Description>
        Если вам неудобно ждать курьера, то забрать заказ вы можете
        самостоятельно в ближайшем пункте самовывоза. Доставка до пункта выдачи
        осуществляется бесплатно. На пункте выдачи услуга выбора не
        предоставляется. <br />В Вашем городе самовывоз обеспечивают службы
        доставки: IML, Boxberry Стоимость доставки службой IML - бесплатно (срок
        доставки - 1 день) <br />
        Стоимость доставки службой Boxberry - бесплатно (срок доставки - 1 день)
      </Description>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.9935466746651!2d30.314934868284983!3d59.8737612248714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696300a7c006a43%3A0x80d673170cc71d09!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LPRgdC60LjQuSDQs9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQsNGN0YDQvtC60L7RgdC80LjRh9C10YHQutC-0LPQviDQv9GA0LjQsdC-0YDQvtGB0YLRgNC-0LXQvdC40Y8u0KTQsNC60YPQu9GM0YLQtdGCINGB0YDQtdC00L3QtdCz0L4g0L_RgNC-0YTQtdGB0YHQuNC-0L3QsNC70YzQvdC-0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1586382438160!5m2!1sru!2sru"
        width="600"
        height="450"
        title="map"
        // frameborder="0"
        // style="border:0;"
        // allowfullscreen=""
        // aria-hidden="false"
        // tabindex="0"
      ></iframe>
    </DeliveryBlock>
  );
};

export default Delivery;

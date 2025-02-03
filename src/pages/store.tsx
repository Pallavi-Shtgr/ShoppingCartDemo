
import StoreItems from "../data/items.json"
export default function Store() {
    return (
    <> 
     <h1>Store Page</h1>
    <Row>
      {StoreItems.map(item =>(
          <Col>
    </Col>

      ) )}
    
      </Row> </>
    )
  }
  
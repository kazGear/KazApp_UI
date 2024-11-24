import TestPageLinks from "../components/common/TestPageLinks";

const ShopPage = () => {
    return (
        <>
            <div>shop page.</div>

            <div>
                <select>
                    <option>shop1</option>
                    <option>shop2</option>
                    <option>shop3</option>
                </select>
            </div>

            <div>
                <select>
                    <option>category1</option>
                    <option>category2</option>
                    <option>category2</option>
                </select>
            </div>

            <div>
                <div>weapons.</div>
                <table>
                    <tr className="header">
                        <td>name</td>
                        <td>attack</td>
                        <td>price</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>weaopn1</td>
                        <td>5</td>
                        <td>500</td>
                        <td>
                            <button>カートへ</button>
                        </td>
                        <td>
                            <button>購入</button>
                        </td>
                    </tr>
                    <tr>
                        <td>weaopn2</td>
                        <td>50</td>
                        <td>12000</td>
                        <td>
                            <button>カートへ</button>
                        </td>
                        <td>
                            <button>購入</button>
                        </td>
                    </tr>
                </table>
            </div>

            <div>
                <div>armors.</div>
                <table>
                    <tr className="header">
                        <td>name</td>
                        <td>defence</td>
                        <td>price</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>armor1</td>
                        <td>5</td>
                        <td>500</td>
                        <td>
                            <button>カートへ</button>
                        </td>
                        <td>
                            <button>購入</button>
                        </td>
                    </tr>
                    <tr>
                        <td>armor2</td>
                        <td>50</td>
                        <td>12000</td>
                        <td>
                            <button>カートへ</button>
                        </td>
                        <td>
                            <button>購入</button>
                        </td>
                    </tr>
                </table>
            </div>

            <div>
                <div>materias.</div>
                <table>
                    <tr className="header">
                        <td>name</td>
                        <td>type</td>
                        <td>price</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>armor1</td>
                        <td>type1</td>
                        <td>500</td>
                        <td>
                            <button>カートへ</button>
                        </td>
                        <td>
                            <button>購入</button>
                        </td>
                    </tr>
                    <tr>
                        <td>armor2</td>
                        <td>type2</td>
                        <td>12000</td>
                        <td>
                            <button>カートへ</button>
                        </td>
                        <td>
                            <button>購入</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default ShopPage;

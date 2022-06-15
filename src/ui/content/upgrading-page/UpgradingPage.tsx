import { FC } from "react";
import { HalfGrid } from "../../components/half-grid/HalfGrid";
import { HeaderNav } from "../../components/header-nav/HeaderNav";
import { Text } from "../../components/Text/Text";
import "./UpgradingPage.css";

const UpgradingPage: FC = () => {

    return (
        <div>
            <HeaderNav title="Upgrading to React 18"/>
            <HalfGrid>
                <div className="upgrading-left">
                    <span className="upgrading-topic">Что нужно сделать:</span>
                    <ol className="upgrading-list">
                        <li>Апнуть версии react и react-dom</li>
                        <li>Заменить ReactDOM.render на   ReactDOM.createRoot </li>
                        <li>
                            Тайпинги - фиксить!
                            <ol className="upgrading-list__sublist">
                                <li>FC больше не принимает props.children</li>
                                <li>Куча библиотек связана с проблемой выше</li>
                                <li>Куча можно запатчить as any</li>
                            </ol> 
                        </li>
                        <li>
                            Апнуть react-router до 5.3.3 или 6.3.0
                            <ol className="upgrading-list__sublist">
                                <li>До 6.3.0 - больно, много breaking changes</li>
                                <li>А еще 6.3.0 - несовместимо с connected-router</li>
                                <li>А вот 5.3.3 - всё ок</li>
                            </ol> 
                        </li>
                        <li>
                            Избавиться от дупликатов @types/react - а они будут
                            <ol className="upgrading-list__sublist">
                                <li>npm reinstall</li>
                                <li>Ну или удалить npm.lock</li>
                            </ol> 
                        </li>
                        <li>
                            Зафиксить usePageLoading
                            <ol className="upgrading-list__sublist">
                                <li>Иначе BackOffice не обновится(</li>
                            </ol> 
                        </li>
                    </ol>
                </div>
                <div>
                    TEST 2
                </div>
            </HalfGrid>
        </div>

    )
}

export default UpgradingPage;
import {Layout, Page, EmptyState} from '@shopify/polaris';
import {ResourcePicker, TitleBar} from '@shopify/app-bridge-react';
import store from 'store-js';
const path = require('path');

//var ResourceListPath='../components/ResourceList';
//if(process.env.OSTYPE=='windows'){
//    ResourceListPath='..\\components\\ResourceList';
//}

var ResourceListwithProducts = require(path.join('..', 'components', 'ResourceList')).default;

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
    state = {open: false};
    render(){
    const emptyState = !store.get('ids');
    return(
        <div>
        <Page>
            <TitleBar
            title="Benchmarker"
            primaryAction={{
                content: 'Select products',
                onAction: () => this.setState ({open: true})
            }}
            />
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={this.state.open}
                onSelection={(resources) => this.handleSelection(resources)}
                onCancel={() => this.setState({ open: false })}
            />
            {emptyState? (
            <Layout>
            <EmptyState
                heading="Discount your products temporarily"
                action={{
                    content: 'Select products',
                    onAction: () => this.setState({open:true}),
                }}
                image={img}
            >
            <p>Select products to change their price temporarily.</p>
            </EmptyState> 
            </Layout>) : (
            <ResourceListwithProducts />)
            }
        </Page>
        </div>
    );   
    };

    handleSelection = (resources) => {
        const idsfromResources = resources.selection.map((product) => product.id);
        this.setState({open: false});
        //console.log(idsfromResources);
        store.set('ids', idsfromResources);
    };
}
  
  export default Index;
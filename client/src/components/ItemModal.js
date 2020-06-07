import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input

} from 'reactstrap';
import PropTypes from 'prop-types'


import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';



class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    };
    static propTypes = {
        isAuthonticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name

        }
        this.props.addItem(newItem);

        this.toggle();
    }
    render() {

        return (
            <div>
                {this.props.isAuthonticated ? <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}>
                    AddItem
        </Button> : <h4 className="mb-3 ml-4">Please login to manage items</h4>}

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add To Shopping List
            </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">
                                    Item
                        </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange}
                                />
                                <Button color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >
                                    Add Item
                        </Button>

                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthonticated: state.auth.isAuthonticated
})


export default connect(mapStateToProps, { addItem })(ItemModal);
